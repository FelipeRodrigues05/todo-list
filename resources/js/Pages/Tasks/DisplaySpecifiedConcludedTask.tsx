import Button from "@/Components/Tasks/Button";
import { TextArea, TextInput } from "@/Components/Tasks/TextInput";
import { Head } from "@inertiajs/react";
import moment from "moment";

export default function DisplaySpecifiedConcludedTask({ task }: any) {
  const conclusionDate = moment(task.conclusion_date).format("D/MM/YYYY");
  
  return (
    <>
      <Head title={`Tarefa ${task.id}`} />
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="items-center justify-center bg-slate-300 rounded-xl p-6 shadow-lg w-auto">
          <h1 className="text-xl mb-3">
            <strong>{task.name}</strong>
          </h1>
          <form>
            <TextArea
              className="bg-slate-200 rounded-lg p-3 mb-3 border-none min-w-full min-h-full resize-none w-80 h-40"
              placeholder="Nome"
              value={task.description}
              disabled
            />
            <br />
            <TextInput
              className="bg-slate-200 rounded-lg p-3 shadow-lg mb-3 border-none min-w-full"
              disabled
              value={conclusionDate}
            />
            <hr className="my-1 h-0.5 border-t-0 bg-neutral-400 opacity-100 dark:opacity-50" />
            <Button
              url={route("task.concluded")}
              name="Voltar"
              className="bg-indigo-500 text-white hover:brightness-110 transition-all delay-100 ease-linear"
            />
          </form>
        </div>
      </div>
    </>
  );
}
