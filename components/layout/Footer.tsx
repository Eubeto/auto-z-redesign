import { MessageCircle } from 'lucide-react'
import { siteConfig, footerLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-xl text-white">AUTO</span>
              <span className="font-display font-bold text-xl text-gradient-brand">-Z</span>
              <span className="ml-1 text-[10px] font-semibold text-slate-500 tracking-widest uppercase mt-0.5">
                .tech
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Automatização inteligente de leads para stands automóveis em Portugal.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium hover:bg-green-500/15 transition-colors"
            >
              <MessageCircle size={14} />
              Falar no WhatsApp
            </a>
          </div>

          {/* Produto */}
          <div>
            <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase mb-4">
              Produto
            </p>
            <ul className="space-y-2.5">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase mb-4">
              Empresa
            </p>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase mb-4">
              Legal
            </p>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {siteConfig.year} AUTO-Z. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Valores apresentados acrescem IVA à taxa legal em vigor.
          </p>
        </div>
      </div>
    </footer>
  )
}
