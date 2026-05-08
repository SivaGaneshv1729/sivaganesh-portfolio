const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Siva Ganesh. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default Footer
