import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Tasks/Button";
import { Head, router } from "@inertiajs/react";
import moment from "moment";
import { useState } from "react";
import { BiCog, BiTrash } from "react-icons/bi";

export default function ListAllTask({ tasks }: any) {
  const [concluded, setConcluded] = useState(false);

  function handleConclusion(taskId: string) {
    let conclusion = !concluded;
    console.log(conclusion);
    router.put(`/task/concluded/${taskId}`, {
      conclusion,
    });
  }

  function handleDelete(id: string) {
    router.delete(`/task/${id}`);
  }

  return (
    <>
      <Head title="Tarefas" />
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="items-center justify-center bg-slate-300 rounded-xl p-6 shadow-lg">
          <div className="flex flex-row">
            <h1 className="text-xl mb-3">Todas as Tarefas</h1>
            <a
              href={route("task.concluded")}
              className="text-sm px-3 items-center justify-center text-green-700"
            >
              Mostrar Concluídas
            </a>
          </div>
          {tasks.length > 0 ? (
            <table className="table-fixed">
              <tbody>
                {tasks.map((task: any) =>
                  task.concluded == 0 ? (
                    <tr key={task.id}>
                      <td>
                        <Checkbox
                          onClick={() => handleConclusion(task.id)}
                          checked={concluded}
                          onChange={() => setConcluded(!concluded)}
                        />
                      </td>
                      <td>
                        <Button
                          className="hover:text-slate-700"
                          url={`/task/${task.id}`}
                          name={task.name}
                        ></Button>
                      </td>
                      <td className="w-32">
                        {moment(task.estimated_date).format("D/MM/YYYY")}
                      </td>
                      <td>
                        <Button
                          name={<BiCog size={24} />}
                          url={`/task/${task.id}/edit`}
                          className="hover:text-indigo-600"
                        />
                      </td>
                      <td>
                        <Button
                          className="hover:text-red-600"
                          name={<BiTrash size={24} />}
                          onClick={() => handleDelete(task.id)}
                        />
                      </td>
                    </tr>
                  ) : (
                    <></>
                  )
                )}
              </tbody>
            </table>
          ) : (
            <p>Sem Tarefas</p>
          )}
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-400 opacity-100 dark:opacity-50" />
          <Button
            name="Criar Tarefa"
            url={route("task.create")}
            className="bg-indigo-500 text-white hover:brightness-110 transition-all delay-100 ease-linear"
          />
          <Button
            name="Editor de Texto"
            url={route("task.create")}
            className="bg-gray-800 text-white hover:brightness-110 transition-all delay-100 ease-linear"
          />
        </div>
      </div>
    </>
  );
}
