import React, { useState } from 'react';

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const weeks = [1,2,3,4,5,6,7,8];

  const projectData = [
    {
      id: 'f1',
      phase: 'ANÁLISIS',
      color: 'bg-blue-600',
      tasks: [
        {
          id: 1,
          title: 'Revisión de requisitos',
          start: 1,
          end: 1,
          roleLabel: 'PM',
          responsible: 'Carolina Gómez - Project Manager',
          content: `Qué: Análisis de condiciones, objetivos y criterios de la licitación.
Para qué: Alinear la propuesta con las expectativas del cliente.
Resultado: Marco de requisitos validado.`
        },
        {
          id: 2,
          title: 'Necesidades formativas',
          start: 1,
          end: 1,
          roleLabel: 'DI',
          responsible: 'Marta Polo - Diseño instruccional',
          content: `Qué: Identificación de gaps en ciberseguridad.
Para qué: Priorizar contenidos relevantes.
Resultado: Mapa de necesidades.`
        },
        {
          id: 3,
          title: 'Identificación de perfiles',
          start: 1,
          end: 2,
          roleLabel: 'DI',
          responsible: 'Marta Polo - Diseño instruccional',
          content: `Qué: Segmentación de usuarios.
Para qué: Ajustar el diseño formativo.
Resultado: Público objetivo definido.`
        }
      ]
    },

    {
      id: 'f2',
      phase: 'DISEÑO',
      color: 'bg-cyan-500',
      tasks: [
        {
          id: 4,
          title: 'Modelo pedagógico',
          start: 2,
          end: 2,
          roleLabel: 'DI',
          responsible: 'Marta Polo - Diseño instruccional',
          content: `Qué: Definición del enfoque LXD + microlearning.
Para qué: Garantizar aprendizaje aplicado.
Resultado: Marco metodológico.`
        },
        {
          id: 5,
          title: 'Diseño de cápsulas',
          start: 2,
          end: 3,
          roleLabel: 'UX',
          responsible: 'Sandra Valera - Diseño UX',
          content: `Qué: Estructuración de unidades basadas en decisión.
Para qué: Facilitar aprendizaje en contexto real.
Resultado: Modelo de cápsula reutilizable.`
        },
        {
          id: 6,
          title: 'Sistema de evaluación',
          start: 3,
          end: 4,
          roleLabel: 'DI',
          responsible: 'Marta Polo - Diseño instruccional',
          content: `Qué: Diseño de evaluación diagnóstica y sumativa.
Para qué: Medir aprendizaje y progreso.
Resultado: Sistema evaluativo integrado.`
        }
      ]
    },

    {
      id: 'f3',
      phase: 'DESARROLLO',
      color: 'bg-indigo-500',
      tasks: [
        {
          id: 7,
          title: 'Producción de contenidos',
          start: 3,
          end: 5,
          roleLabel: 'DI',
          responsible: 'Marta Polo - Diseño instruccional',
          content: `Qué: Elaboración de guiones y materiales.
Para qué: Construir contenido formativo.
Resultado: Contenidos listos.`
        },
        {
          id: 8,
          title: 'Diseño UX',
          start: 3,
          end: 5,
          roleLabel: 'UX',
          responsible: 'Sandra Valera - Diseño visual y UX',
          content: `Qué: Diseño visual y experiencia de usuario.
Para qué: Mejorar interacción.
Resultado: Prototipos en Figma.`
        },
        {
          id: 9,
          title: 'Integración LMS',
          start: 5,
          end: 6,
          roleLabel: 'TECH',
          responsible: 'Yolanda Fuertes - Tecnología',
          content: `Qué: Carga y configuración de contenidos.
Para qué: Preparar entorno formativo.
Resultado: Curso operativo.`
        }
      ]
    },

    {
      id: 'f4',
      phase: 'IMPLEMENTACIÓN',
      color: 'bg-teal-500',
      tasks: [
        {
          id: 10,
          title: 'Configuración LMS',
          start: 6,
          end: 6,
          roleLabel: 'TECH',
          responsible: 'Yolanda Fuertes - Tecnología',
          content: `Qué: Parametrización del entorno.
Para qué: Asegurar funcionamiento.
Resultado: Plataforma preparada.`
        },
        {
          id: 11,
          title: 'Pruebas',
          start: 6,
          end: 7,
          roleLabel: 'DI',
          responsible: 'Marta Polo - Diseño Instruccional',
          content: `Qué: Validación técnica y funcional.
Para qué: Detectar errores.
Resultado: Sistema validado.`
        },
        {
          id: 12,
          title: 'Despliegue',
          start: 7,
          end: 7,
          roleLabel: 'PM',
          responsible: 'Carolina Gómez - Project Manager',
          content: `Qué: Publicación del curso.
Para qué: Inicio de la formación.
Resultado: Curso activo.`
        }
      ]
    },

    {
      id: 'f5',
      phase: 'EVALUACIÓN',
      color: 'bg-purple-500',
      tasks: [
        {
          id: 13,
          title: 'Seguimiento',
          start: 7,
          end: 8,
          roleLabel: 'PM',
          responsible: 'Carolina Gómez - Project Manager',
          content: `Qué: Monitorización mediante analytics.
Para qué: Evaluar uso y progreso.
Resultado: Datos de aprendizaje.`
        },
        {
          id: 14,
          title: 'Evaluación de resultados',
          start: 8,
          end: 8,
          roleLabel: 'DI',
          responsible: 'Marta Polo - Diseño Instruccional',
          content: `Qué: Análisis de indicadores.
Para qué: Medir impacto.
Resultado: Informe de resultados.`
        },
        {
          id: 15,
          title: 'Mejora continua',
          start: 8,
          end: 8,
          roleLabel: 'PM',
          responsible: 'Efrén Úbeda - Gestión  corporativa',
          content: `Qué: Ajustes basados en datos.
Para qué: Optimizar el programa.
Resultado: Iteración del diseño.`
        }
      ]
    },

   {
  id: 'f6',
  phase: 'TRANSVERSAL',
  color: 'bg-slate-600',
  tasks: [
    {
      id: 16,
      title: 'Gestión del proyecto',
      start: 1,
      end: 8,
      roleLabel: 'PM',
      responsible: 'Carolina Gómez · Project Manager',
      content: `Qué: Coordinación y seguimiento del proyecto.
Para qué: Garantizar cumplimiento de planificación.
Resultado: Proyecto alineado.`
    },
    {
      id: 17,
      title: 'Control de calidad',
      start: 3,
      end: 8,
      roleLabel: 'DI',
      responsible: 'Marta Polo · Diseño instruccional',
      content: `Qué: Revisión pedagógica continua.
Para qué: Asegurar coherencia metodológica.
Resultado: Calidad garantizada.`
    },
    {
      id: 18,
      title: 'Supervisión corporativa',
      start: 1,
      end: 8,
      roleLabel: 'CORP',
      responsible: 'Efrén Úbeda · Gestión corporativa',
      content: `Qué: Supervisión estratégica del proyecto.
Para qué: Garantizar coherencia global y alineación corporativa.
Resultado: Propuesta alineada con objetivos de negocio.`
    },
{
  id: 19,
  title: 'Comunicación con stakeholders',
  start: 1,
  end: 8,
  roleLabel: 'PM',
  responsible: 'Carolina Gómez · Project Manager',
  content: `Qué: Gestión de la comunicación con cliente y agentes implicados.
Para qué: Alinear expectativas, validar avances y facilitar la toma de decisiones.
Resultado: Seguimiento transparente y validación continua del proyecto.`
}
  ]
}
  ];

  return (
    <div className="min-h-screen bg-[#0a0e14] text-slate-200">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-5 mt-5">
        <div className="grid grid-cols-12 items-start gap-1">

          <div className="col-span-10 pl-4">
            <img 
              src="/hero.png" 
              alt="SYMEC banner"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="col-span-2 flex flex-col gap-3 items-end">

  <div className="w-full max-w-[120px] px-3 py-2 rounded-xl border border-cyan-500/40 bg-[#0d1117]">
    <span className="block text-[9px] text-slate-500">Duración</span>
    <span className="text-cyan-400 text-sm">8 semanas</span>
  </div>

  <div className="w-full max-w-[120px] px-3 py-2 rounded-xl border border-green-500/40 bg-[#0d1117]">
    <span className="block text-[9px] text-slate-500">Estado</span>
    <span className="text-green-400 text-sm">Planificado</span>
  </div>

  <div className="w-full max-w-[120px] px-3 py-2 rounded-xl border border-purple-500/40 bg-[#0d1117]">
    <span className="block text-[9px] text-slate-500">Alcance</span>
    <span className="text-purple-400 text-sm">24 cápsulas</span>
  </div>

  <div className="w-full max-w-[120px] px-3 py-2 rounded-xl border border-indigo-500/40 bg-[#0d1117]">
    <span className="block text-[9px] text-slate-500">Modalidad</span>
    <span className="text-indigo-400 text-sm">LMS online</span>
  </div>

</div>

        </div>
      </div>

      {/* GANTT */}
      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        <div className="bg-[#0d1117] rounded-2xl border border-slate-800 overflow-hidden">

          <div className="grid grid-cols-12 border-b border-slate-800">
            <div className="col-span-4 p-4 text-xs text-slate-500">
              Actividades
            </div>

            <div className="col-span-8 grid grid-cols-8">
              {weeks.map(w => (
                <div key={w} className="text-center p-4 border-l border-slate-800 text-xs">
                  S{w}
                </div>
              ))}
            </div>
          </div>

          {projectData.map(phase => (
            <div key={phase.id} className="border-t border-slate-800">

              <div className="p-3 bg-slate-900/40 flex items-center gap-2">

  <div className={`w-2.5 h-2.5 rounded-full ${phase.color}`}></div>

  <span className="text-xs font-bold tracking-wider text-slate-300">
    {phase.phase}
  </span>

</div>

              {phase.tasks.map(task => (
                <div key={task.id} className="grid grid-cols-12">

                  <div className="col-span-4 p-3 text-xs">
                    {task.title}
                  </div>

                  <div className="col-span-8 grid grid-cols-8 relative">

                    {weeks.map(w => (
                      <div key={w} className="border-l border-slate-800"></div>
                    ))}

                    <div
                      className={`${phase.color} absolute top-1 bottom-1 rounded-md flex items-center justify-center text-[10px] font-semibold text-white`}
                      style={{
                        left: `${((task.start - 1) / 8) * 100}%`,
                        width: `${((task.end - task.start + 1) / 8) * 100}%`
                      }}
                      onClick={() => setSelectedTask(task)}
                    >
                      {task.roleLabel}
                    </div>

                  </div>
                </div>
              ))}

            </div>
          ))}

        </div>
      </div>

{/* FOOTER */}
<div className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-3 gap-6">

  {/* EQUIPO */}
  <div className="bg-[#161b22] p-5 rounded-2xl border border-slate-800 shadow-lg">

    <h4 className="text-sm font-semibold mb-4 text-white tracking-wide flex items-center gap-2">
      
      {/* ICONO */}
      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m8-4a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>

      Equipo Responsable
    </h4>

    <div className="space-y-3 text-xs">

      <div className="bg-black/30 p-3 rounded-lg border border-slate-800">
        <p className="text-cyan-400 font-medium">Project Manager - Carolina Gómez</p>
        <p className="text-slate-400 mt-1">
          Coordinación general, planificación, seguimiento y comunicación con cliente.
        </p>
      </div>

      <div className="bg-black/30 p-3 rounded-lg border border-slate-800">
        <p className="text-indigo-400 font-medium">Diseño instruccional - Marta Polo</p>
        <p className="text-slate-400 mt-1">
          Diseño pedagógico, estructuración de contenidos, actividades y evaluación.
        </p>
      </div>

      <div className="bg-black/30 p-3 rounded-lg border border-slate-800">
        <p className="text-teal-400 font-medium">Tecnología y plataforma - Yolanda Fuertes</p>
        <p className="text-slate-400 mt-1">
          Selección tecnológica e integración de contenidos en la plataforma.
        </p>
      </div>

      <div className="bg-black/30 p-3 rounded-lg border border-slate-800">
        <p className="text-purple-400 font-medium">Diseño visual y UX - Sandra Valera</p>
        <p className="text-slate-400 mt-1">
          Diseño gráfico, identidad visual y experiencia de usuario.
        </p>
      </div>

      <div className="bg-black/30 p-3 rounded-lg border border-slate-800">
        <p className="text-emerald-400 font-medium">Gestión corporativa - Efrén Úbeda</p>
        <p className="text-slate-400 mt-1">
          Estructuración del proyecto, coherencia global, presupuesto y enfoque corporativo.
        </p>
      </div>

    </div>
  </div>

  {/* NOTAS */}
  <div className="bg-[#161b22] p-5 rounded-2xl border border-slate-800 shadow-lg md:col-span-2">

    <h4 className="text-sm font-semibold mb-4 text-white tracking-wide flex items-center gap-2">
      
      {/* ICONO */}
      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01"/>
      </svg>

      Notas de implementación
    </h4>

    <p className="text-xs text-slate-400 leading-relaxed">
      Dado el carácter técnico del proyecto, se contempla la colaboración puntual 
      de perfiles especializados en funciones concretas (como soporte de plataforma 
      o asesoramiento en ciberseguridad), en función de las necesidades que puedan 
      surgir durante las fases de desarrollo e implementación.
    </p>

  </div>

</div>

{/* MODAL */}
{selectedTask && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center">

    <div className="bg-gradient-to-b from-[#1a222d] to-[#0f1621] rounded-2xl w-[440px] border border-cyan-500/30 shadow-[0_0_25px_rgba(34,211,238,0.15)] overflow-hidden">

      {/* HEADER */}
      <div className="px-6 py-4 border-b border-slate-700 bg-black/30">
        <h2 className="text-lg font-semibold text-white">
          {selectedTask.title}
        </h2>
      </div>

      {/* BODY */}
      <div className="px-6 py-5">

        <div className="mb-4 text-sm">
          <span className="text-slate-400 block">Responsable</span>
          <span className="text-cyan-400 font-medium">
            {selectedTask.responsible}
          </span>
        </div>

<div className="space-y-3 text-sm">

  {selectedTask.content.split('\n').map((line, i) => {
    const [label, ...rest] = line.split(':');
    const value = rest.join(':');

    return (
      <div key={i} className="bg-black/30 p-3 rounded-lg border border-slate-700">
        
        <span className="block text-[10px] uppercase tracking-wider text-cyan-400 mb-1">
          {label}
        </span>

        <span className="text-slate-300 leading-relaxed">
          {value}
        </span>

      </div>
    );
  })}

</div>

      </div>

      {/* FOOTER */}
      <div className="px-6 pb-5">
        <button 
          className="w-full py-2 rounded-xl bg-slate-700 hover:bg-slate-600 transition text-sm font-medium"
          onClick={() => setSelectedTask(null)}
        >
          Cerrar
        </button>
      </div>

    </div>

  </div>
)}

    </div>
  );
};

export default App;