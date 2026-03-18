---
paths: src/lib/supabase/** src/middleware.ts src/app/**/admin/**
---
# Supabase Auth & SSR Rules

## Package
Use `@supabase/ssr` ONLY. Never import from `@supabase/auth-helpers-nextjs` (deprecated).

## Client Creation
```typescript
// lib/supabase/server.ts — Server Components, Route Handlers, Server Actions
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options))
          } catch { /* Server Component — read-only */ }
        },
      },
    }
  )
}

// lib/supabase/client.ts — Client Components
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

## Cookie Methods
- Use ONLY `getAll()` and `setAll()` — never individual get/set/remove
- This is required for proper session refresh

## Auth Verification
- Server-side: ALWAYS use `supabase.auth.getUser()` — verifies with Supabase Auth server
- NEVER use `supabase.auth.getSession()` for auth checks — returns potentially stale cached data
- `getSession()` is OK only for reading non-sensitive session info AFTER getUser() confirms auth

## Middleware
- Must refresh session on every request to prevent stale tokens
- Combine next-intl routing and Supabase in middleware.ts — handle i18n first, then Supabase

## Admin Routes
- Auth guard in `app/[locale]/admin/layout.tsx` using `getUser()`
- If no user → redirect to login page
- No public registration — admin users created manually in Supabase Dashboard

## NEVER
- Never import from `@supabase/auth-helpers-nextjs`
- Never use individual cookie methods (get, set, remove)
- Never use `getSession()` for auth verification
- Never store Supabase client in module scope (Vercel reuses instances across requests)
