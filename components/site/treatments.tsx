"use client";

import {
  Droplet, Sun, Activity, ScanFace, Sparkles, Syringe, Waves, Scissors, Fingerprint, Microscope,
} from "lucide-react";
import type { ReactNode } from "react";
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/tabs";
import { ColorFillCard } from "@/components/ui/color-fill-card";

type Item = { title: string; description: string; icon: ReactNode };

const ic = "h-5 w-5";
const groups: { value: string; label: string; intro: string; items: Item[] }[] = [
  {
    value: "clinica",
    label: "Clínica e Capilar",
    intro: "Diagnóstico e acompanhamento das doenças da pele, do couro cabeludo e das unhas.",
    items: [
      { title: "Acne e Rosácea", description: "Avaliação das causas e plano de tratamento individualizado para controle das lesões e da inflamação.", icon: <Droplet className={ic} strokeWidth={1.5} /> },
      { title: "Melasma", description: "Controle das manchas com abordagem clínica, fotoproteção orientada e acompanhamento contínuo.", icon: <Sun className={ic} strokeWidth={1.5} /> },
      { title: "Psoríase e Vitiligo", description: "Acompanhamento de doenças crônicas da pele com foco em controle e qualidade de vida.", icon: <Fingerprint className={ic} strokeWidth={1.5} /> },
      { title: "Herpes Zoster", description: "Diagnóstico e tratamento precoce, com atenção ao alívio dos sintomas e às complicações.", icon: <Activity className={ic} strokeWidth={1.5} /> },
      { title: "Saúde Capilar", description: "Investigação da queda de cabelo e das alterações do couro cabeludo.", icon: <Waves className={ic} strokeWidth={1.5} /> },
      { title: "Doenças das Unhas", description: "Avaliação de alterações, infecções e distrofias ungueais.", icon: <ScanFace className={ic} strokeWidth={1.5} /> },
    ],
  },
  {
    value: "cosmiatria",
    label: "Cosmiatria",
    intro: "Procedimentos estéticos realizados por médica dermatologista, com indicação criteriosa e resultados naturais.",
    items: [
      { title: "Toxina Botulínica", description: "Suavização de linhas de expressão com aplicação precisa, preservando a naturalidade.", icon: <Syringe className={ic} strokeWidth={1.5} /> },
      { title: "Preenchimentos Faciais", description: "Reposição de volume e contorno facial com planejamento individual.", icon: <Sparkles className={ic} strokeWidth={1.5} /> },
      { title: "IPCA", description: "Indução Percutânea de Colágeno com Agulhas para textura, cicatrizes e qualidade da pele.", icon: <Waves className={ic} strokeWidth={1.5} /> },
    ],
  },
  {
    value: "cirurgica",
    label: "Cirúrgica",
    intro: "Procedimentos dermatológicos realizados em consultório, com técnica e segurança.",
    items: [
      { title: "Dermatologia Cirúrgica", description: "Procedimentos dermatológicos especializados, realizados em consultório com indicação médica.", icon: <Scissors className={ic} strokeWidth={1.5} /> },
      { title: "Avaliação de Lesões", description: "Exame clínico das lesões de pele para definir a conduta mais adequada a cada caso.", icon: <Microscope className={ic} strokeWidth={1.5} /> },
    ],
  },
];

export function Treatments() {
  return (
    <Tabs defaultValue="clinica" roughness={1.5}>
      <TabList aria-label="Categorias de tratamento" className="-mx-3.5 overflow-x-auto">
        {groups.map((g) => (
          <Tab key={g.value} value={g.value} className="whitespace-nowrap text-[15px] sm:text-base">
            {g.label}
          </Tab>
        ))}
      </TabList>

      {groups.map((g) => (
        <TabPanel key={g.value} value={g.value} style={{ paddingTop: 28 }}>
          <p className="mb-8 max-w-xl text-muted">{g.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((item) => (
              <ColorFillCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                baseColor="#ffffff"
                fillColor="#141414"
                textColor="#141414"
                fillTextColor="#ffffff"
                secondaryTextColor="#5f5b54"
                fillSecondaryTextColor="#d9d4ca"
                borderColor="#e6e1d8"
                fillBorderColor="#141414"
                origin="bottom-left"
                duration={900}
                lift={-4}
                className="cursor-default select-text"
              />
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}
