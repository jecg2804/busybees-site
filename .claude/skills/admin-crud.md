# Skill: Admin CRUD Page

## Estructura
```
app/[locale]/admin/{tabla}/page.tsx   — List + create/edit modal or inline
```

## Patrón: Client component con CRUD

```typescript
'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminProgramas() {
  const supabase = createClient()
  const [items, setItems] = useState([])
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    const { data } = await supabase.from('programs').select('*').order('sort_order')
    setItems(data ?? [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const save = async (item) => {
    if (item.id) {
      await supabase.from('programs').update(item).eq('id', item.id)
    } else {
      await supabase.from('programs').insert(item)
    }
    setEditing(null)
    load()
  }

  const remove = async (id) => {
    if (!confirm('¿Eliminar?')) return
    await supabase.from('programs').delete().eq('id', id)
    load()
  }

  // Render: table + form
}
```

## Convenciones Admin

- Layout funcional, no necesita ser bonito
- Formularios bilingüales: campos _es y _en lado a lado (2 columnas)
- DataTable con columnas: nombre, estado, acciones (editar/eliminar)
- Toggle para is_active / is_featured / is_published
- Image upload: usar Supabase Storage, mostrar preview
- Confirmación antes de eliminar
- Toast/alert después de guardar

## Image Upload

```typescript
const uploadImage = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from('images')
    .upload(path, file, { upsert: true })

  if (error) throw error

  const { data: { publicUrl } } = supabase.storage
    .from('images')
    .getPublicUrl(path)

  return publicUrl
}
```

## Auth Guard (admin layout)

```typescript
// app/[locale]/admin/layout.tsx
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children, params }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect(`/${params.locale}/admin/login`)
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
```
