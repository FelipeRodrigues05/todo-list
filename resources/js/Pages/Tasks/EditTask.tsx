import Button from "@/Components/Tasks/Button";
import DatePicker from "@/Components/Tasks/DatePicker";
import { TextArea, TextInput } from "@/Components/Tasks/TextInput";
import { Head, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function EditTask({ task }: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedDate, setEstimatedDate] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      description,
      estimatedDate,
    };

    router.put(`/task/${task.id}`, data);
  }
  return (
    <>
      <Head title={`Editar Tarefa ${task.id}`} />
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="items-center justify-center bg-slate-300 rounded-xl p-6 shadow-lg w-auto">
          <h1 className="text-xl mb-3">Editar Tarefa</h1>
          <form onSubmit={handleSubmit}>
            <TextInput
              placeholder={task.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-slate-100 rounded-lg p-3 shadow-lg mb-3 border-none min-w-full"
            />
            <br />
            <TextArea
              placeholder={
                task.description == null ? "Descrição" : task.description
              }
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-slate-100 rounded-lg p-3 shadow-lg mb-3 border-none min-w-full resize w-96 h-60"
            />
            <br />
            <DatePicker
              value={estimatedDate}
              onChange={(e) => setEstimatedDate(e.target.value)}
              required
              className="bg-slate-100 rounded-lg p-3 shadow-lg mb-3 border-none min-w-full"
            />
            <br />
            <div className="flex flex-row items-center mb-3"></div>
            <hr className="my-1 h-0.5 border-t-0 bg-neutral-400 opacity-100 dark:opacity-50" />
            <Button
              type="submit"
              name="Editar Tarefa"
              className="bg-green-500 text-white hover:brightness-110 transition-all delay-100 ease-linear"
            />
            <Button
              url={route("task.index")}
              name="Voltar"
              className="bg-indigo-500 text-white hover:brightness-110 transition-all delay-100 ease-linear"
            />
          </form>
        </div>
      </div>
    </>
  );
}
