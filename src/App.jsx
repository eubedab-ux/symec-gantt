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
        { id: 1, title: 'Revisión requisitos', start: 1, end: 1, role: 'PM' },
        { id: 2, title: 'Necesidades formativas', start: 1, end: 1, role: 'PM' },
        { id: 3, title: 'Contexto organizativo', start: 1, end: 1, role: 'PM' },
        { id: 4, title: 'Perfiles', start: 1, end: 2, role: 'PM' },
        { id: 5, title: 'Objetivos formativos', start: 2, end: 2, role: 'PM/Calidad' },
      ]
    },
    {
      id: 'f2',
      phase: 'DISEÑO',
      color: 'bg-cyan-500',
      tasks: [
        { id: 6, title: 'Modelo pedagógico', start: 2, end: 2, role: 'Calidad' },
        { id: 7, title: 'Competencias', start: 2, end: 3, role: 'Calidad' },
        { id: 8, title: 'Estructura contenidos', start: 3, end: 3, role: 'Calidad' },
        { id: 9, title: 'Diseño evaluación', start: 3, end: 4, role: 'Calidad' },
      ]
    },
    {
      id: 'f3',
      phase: 'DESARROLLO',
      color: 'bg-indigo-500',
      tasks: [
        { id: 10, title: 'Producción contenidos', start: 3, end: 5, role: 'Calidad' },
        { id: 11, title: 'Diseño UX', start: 3, end: 5, role: 'PM' },
        { id: 12, title: 'Recursos multimedia', start: 4, end: 6, role: 'PM' },
        { id: 13, title: 'Integración LMS', start: 5, end: 6, role: 'PM' },
      ]
    },
    {
      id: 'f4',
      phase: 'IMPLEMENTACIÓN',
      color: 'bg-teal-500',
      tasks: [
        { id: 14, title: 'Configuración LMS', start: 6, end: 6, role: 'PM' },
        { id: 15, title: 'Pruebas', start: 6, end: 7, role: 'Calidad' },
        { id: 16, title: 'Despliegue', start: 7, end: 7, role: 'PM' },
      ]
    },
    {
      id: 'f5',
      phase: 'EVALUACIÓN',
      color: 'bg-purple-500',
      tasks: [
        { id: 17, title: 'Seguimiento', start: 7, end: 8, role: 'PM' },
        { id: 18, title: 'Resultados', start: 8, end: 8, role: 'Calidad' },
        { id: 19, title: 'Feedback', start: 8, end: 8, role: 'PM' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e14] text-slate-200">

{/* HERO */}
<div className="w-full bg-black">

  <img 
    src="/hero.png"
    alt="SYMEC Learning Lab"
    className="w-full h-auto"
  />

</div>
      {/* CONTENIDO */}
      <div className="p-6 md:p-8 max-w-7xl mx-auto">

        {/* CONTENEDOR GANTT */}
        <div className="bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="grid grid-cols-12 border-b border-slate-800 bg-[#161b22]">
            <div className="col-span-4 p-4 text-xs uppercase text-slate-500">
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

          {/* FASES */}
          {projectData.map(phase => (
            <div key={phase.id} className="border-t border-slate-800">

              <div className="p-3 bg-slate-900/40 text-xs font-bold tracking-wider">
                {phase.phase}
              </div>

              {phase.tasks.map(task => (
                <div key={task.id} className="grid grid-cols-12 hover:bg-white/5">

                  <div className="col-span-4 p-3 text-xs">
                    {task.title}
                  </div>

                  <div className="col-span-8 grid grid-cols-8 relative">

                    {weeks.map(w => (
                      <div key={w} className="border-l border-slate-800/50"></div>
                    ))}

                    <div
                      className={`${phase.color} absolute top-1 bottom-1 rounded cursor-pointer opacity-80 hover:opacity-100 flex items-center justify-center text-[10px] font-bold`}
                      style={{
                        left: `${((task.start - 1) / 8) * 100}%`,
                        width: `${((task.end - task.start + 1) / 8) * 100}%`
                      }}
                      onClick={() => setSelectedTask(task)}
                    >
                      {task.role}
                    </div>

                  </div>
                </div>
              ))}

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-slate-800 p-6 rounded-xl w-[300px]">
            <h2 className="font-bold mb-2">{selectedTask.title}</h2>
            <p className="text-sm">Semana {selectedTask.start} - {selectedTask.end}</p>
            <p className="text-sm">{selectedTask.role}</p>

            <button 
              className="mt-4 bg-slate-700 px-3 py-1 rounded"
              onClick={() => setSelectedTask(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;