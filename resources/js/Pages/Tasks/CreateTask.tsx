import Button from "@/Components/Tasks/Button";
import DatePicker from "@/Components/Tasks/DatePicker";
import { TextArea, TextInput } from "@/Components/Tasks/TextInput";
import { Head, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function CreateTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    router.post("/task", {
      data: {
        name,
        description,
        date,
      },
    });
  }

  return (
    <>
      <Head title="Criar Tarefa" />
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="items-center justify-center bg-slate-300 rounded-xl p-6 shadow-lg w-auto">
          <h1 className="text-xl mb-3">Nova Tarefa</h1>
          <form onSubmit={handleSubmit}>
            <TextInput
              placeholder="Nome da Tarefa"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-slate-100 rounded-lg p-3 shadow-lg mb-3 border-none  min-w-full"
            />
            <br />
            <TextArea
              placeholder="Descrição da Tarefa"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-slate-100 rounded-lg p-3 shadow-lg mb-3 border-none w-96 h-60 resize min-w-full"
            />
            <br />
            <DatePicker
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="bg-slate-100 rounded-lg p-3 shadow-lg mb-3 border-none min-w-full"
            />
            <hr className="my-1 h-0.5 border-t-0 bg-neutral-400 opacity-100 dark:opacity-50" />
            <Button
              type="submit"
              name="Criar Tarefa"
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
