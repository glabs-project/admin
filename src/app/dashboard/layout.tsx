export default function DashboardLayout({
  children,
  analytics,
  products
}: Readonly<{
  children: React.ReactNode
  analytics: React.ReactNode
  products: React.ReactNode
}>) {
  return (
    <>
      {children}
      {analytics}
      {products}
    </>
  )
}
