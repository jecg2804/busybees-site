# Skill: Admin CRUD Page

## Pattern: Client component with CRUD

```typescript
'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminProgramas() {
  const supabase = createClient()
  const [items, setItems] = useState<Program[]>([])
  const [editing, setEditing] = useState<Program | null>(null)
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    const { data } = await supabase.from('programs').select('*').order('sort_order')
    setItems(data ?? [])
    setLoading(false)
  }, [supabase])

  useEffect(() => { load() }, [load])

  const save = async (item: Partial<Program>) => {
    if (item.id) {
      await supabase.from('programs').update(item).eq('id', item.id)
    } else {
      await supabase.from('programs').insert(item)
    }
    setEditing(null)
    load()
  }

  const remove = async (id: string) => {
    if (!confirm('¿Eliminar?')) return
    await supabase.from('programs').delete().eq('id', id)
    load()
  }
  // Render: table + form
}
```

## Admin conventions
- Functional layout — doesn't need to be beautiful
- Bilingual forms: `_es` and `_en` fields side by side (2 columns)
- DataTable with columns: name, status, actions (edit/delete)
- Toggle for is_active / is_featured / is_published
- Image upload via Supabase Storage with preview
- Confirm before delete
- Visual feedback after save (alert or toast)

## Auth guard
```typescript
// app/[locale]/admin/layout.tsx
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function AdminLayout({ children, params }: Props) {
  const { locale } = await params  // Next.js 15: await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()  // getUser, NOT getSession

  if (!user) {
    redirect(`/${locale}/admin/login`)
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
```
