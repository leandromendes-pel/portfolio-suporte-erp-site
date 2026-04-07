export default function PortfolioSuporteERP() {
  const whatsappNumber = "5591985043835";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi sua apresentação sobre Suporte Técnico Especializado para Revendas ERP e gostaria de entender melhor como funciona o serviço."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const benefits = [
    "Redução drástica do tempo de atendimento",
    "Menor dependência do suporte da software house",
    "Resolução mais rápida de problemas críticos",
    "Mais qualidade no atendimento ao cliente final",
    "Suporte técnico de alto nível sem precisar contratar internamente",
    "Prioridade em casos críticos, como banco de dados corrompidos",
    "Ajuda de nível contábil na montagem de notas fiscais",
    "Ajuste rápido e em massa de tributação",
  ];

  const differentials = [
    {
      title: "Banco de dados MySQL avançado",
      text: "Consultas complexas, updates criteriosos, correção de inconsistências e atuação direta em situações que normalmente exigiriam escalonamento.",
    },
    {
      title: "Descorrompimento de banco de dados",
      text: "Capacidade de agir com prioridade em cenários críticos, reduzindo o tempo de espera e o impacto no cliente final.",
    },
    {
      title: "Conhecimento fiscal e tributário",
      text: "Apoio em notas fiscais, tributos essenciais e ajustes tributários em massa para acelerar operações da revenda.",
    },
    {
      title: "Infraestrutura de loja e PDV",
      text: "Suporte em impressoras térmicas, etiquetadoras, A4, balanças, leitores, busca preço e noções de rede.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Entendimento da operação",
      text: "Alinhamento com a rotina da revenda, tipos de chamados e principais gargalos técnicos.",
    },
    {
      step: "2",
      title: "Atuação no suporte N1, N2 e N3",
      text: "Apoio técnico remoto com foco em agilidade, precisão e resolução real de problemas.",
    },
    {
      step: "3",
      title: "Priorização de casos críticos",
      text: "Banco corrompido, tributação em massa e incidentes que afetam a operação recebem atenção diferenciada.",
    },
    {
      step: "4",
      title: "Mais autonomia para a revenda",
      text: "Sua equipe passa a depender menos da software house e atende melhor o cliente final.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.10),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-sm text-sky-300">
                Suporte Técnico Especializado para Revendas ERP
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Aumente o nível técnico da sua revenda e reduza a dependência do suporte oficial.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Serviço focado no ERP da LC Sistemas Softhouse, com atuação remota em N1, N2 e N3, banco de dados, fiscal, tributação e infraestrutura de loja.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Ver benefícios
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-sky-300">N1 a N3</div>
                  <div className="mt-1 text-sm text-slate-300">Atuação técnica completa</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-emerald-300">MySQL</div>
                  <div className="mt-1 text-sm text-slate-300">Banco de dados avançado</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-amber-300">R$ 2.000</div>
                  <div className="mt-1 text-sm text-slate-300">Plano mensal</div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur">
              <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Proposta do serviço</p>
                    <h2 className="text-xl font-semibold text-white">Plano Mensal Especializado</h2>
                  </div>
                  <div className="rounded-xl bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                    Atendimento remoto
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-slate-300">
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="text-sm text-slate-400">Horário padrão</p>
                      <p className="text-base font-semibold text-white">09:00 às 17:00</p>
                    </div>
                    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">Flexível</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="text-sm text-slate-400">Carga horária</p>
                      <p className="text-base font-semibold text-white">7 horas diárias</p>
                    </div>
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">Mensal</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 p-5">
                    <p className="text-sm text-slate-300">Investimento</p>
                    <p className="mt-1 text-4xl font-bold text-amber-300">R$ 2.000<span className="text-lg text-slate-300">/mês</span></p>
                    <p className="mt-3 text-sm text-slate-300">
                      Uma alternativa de alto nível técnico para revendas que querem crescer sem ampliar a estrutura interna com custo fixo maior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8" id="problema">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-red-400/15 bg-red-500/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">A dor da revenda</p>
            <h3 className="mt-4 text-3xl font-bold">Quando o suporte técnico não acompanha a operação, o cliente sente primeiro.</h3>
            <p className="mt-4 text-slate-300">
              Chamados demorados, dependência excessiva da software house, filas para casos críticos e dificuldade em resolver demandas de banco de dados ou tributação prejudicam a percepção de valor da sua revenda.
            </p>
          </div>
          <div className="rounded-[28px] border border-emerald-400/15 bg-emerald-500/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">A solução</p>
            <h3 className="mt-4 text-3xl font-bold">Suporte especializado para transformar velocidade em confiança.</h3>
            <p className="mt-4 text-slate-300">
              O serviço foi pensado para dar mais segurança técnica à equipe da revenda, acelerar resolução de incidentes e melhorar a experiência do cliente final com apoio remoto de alto nível.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8" id="beneficios">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Benefícios claros</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">O que a sua revenda ganha ao contratar esse serviço</h2>
          <p className="mt-4 text-slate-300">
            O foco não é apenas suporte técnico. É melhorar sua operação, diminuir gargalos e entregar um atendimento mais forte para o cliente final.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-2xl bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-300">Benefício</div>
              <p className="text-lg font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8" id="diferenciais">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Diferenciais técnicos</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Competências que geram autonomia para a revenda</h2>
            <p className="mt-4 text-slate-300">
              O grande diferencial está em unir conhecimento técnico profundo com entendimento operacional da rotina das revendas que trabalham com ERP.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Solicitar apresentação
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {differentials.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Como funciona</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Uma estrutura simples para gerar resultado rápido</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-[24px] border border-white/10 bg-slate-950 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-lg font-bold text-amber-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8" id="plano">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Plano mensal</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Suporte Técnico Especializado para Revendas ERP</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Atendimento remoto com foco em rotina de revenda, suporte técnico completo e priorização de casos que mais impactam a operação.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Formato</p>
                <p className="mt-1 text-lg font-semibold text-white">100% remoto</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Horário padrão</p>
                <p className="mt-1 text-lg font-semibold text-white">09:00 às 17:00</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Carga diária</p>
                <p className="mt-1 text-lg font-semibold text-white">7 horas</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Flexibilidade</p>
                <p className="mt-1 text-lg font-semibold text-white">Negociável com a revenda</p>
              </div>
            </div>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-gradient-to-b from-amber-500/10 to-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Investimento</p>
            <div className="mt-4 text-5xl font-bold text-white">R$ 2.000</div>
            <p className="mt-2 text-slate-300">por mês</p>
            <div className="mt-8 space-y-3 text-slate-200">
              <p>✔ Suporte N1, N2 e N3</p>
              <p>✔ Banco de dados MySQL</p>
              <p>✔ Prioridade em casos críticos</p>
              <p>✔ Apoio fiscal e tributário</p>
              <p>✔ Infraestrutura e PDV</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400"
            >
              Quero conversar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8" id="contato">
        <div className="rounded-[32px] border border-sky-400/20 bg-gradient-to-r from-sky-500/10 via-slate-900 to-emerald-500/10 p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contato</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Sua revenda pode operar com muito mais velocidade e segurança técnica.</h2>
              <p className="mt-4 max-w-3xl text-slate-300">
                Envie uma mensagem e veja como esse suporte pode reduzir gargalos, acelerar atendimentos e fortalecer a percepção de qualidade do seu serviço.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400"
              >
                Chamar no WhatsApp
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-slate-300">
                WhatsApp: (91) 98504-3835
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
