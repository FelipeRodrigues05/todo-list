import Button from "@/Components/Tasks/Button";
import { Head, router } from "@inertiajs/react";
import moment from "moment";
import { BiTrash } from "react-icons/bi";

export default function ListAllConcludedTasks({ tasks }: any) {
  function handleDelete(id: string) {
    router.delete(`/task/${id}`);
  }

  return (
    <>
      <Head title="Tarefas" />
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="items-center justify-center bg-slate-300 rounded-xl p-6 shadow-lg">
          <div className="flex flex-row">
            <h1 className="text-xl mb-3">Tarefas Concluídas</h1>
          </div>
          {tasks.length > 0 ? (
            <table className="table-auto">
              <tbody>
                {tasks.map((task: any) =>
                  task.concluded == 1 ? (
                    <tr key={task.id}>
                      <td>
                        <Button
                          className="hover:text-slate-700 p-0"
                          url={`/task/concluded/${task.id}`}
                          name={task.name}
                        ></Button>
                      </td>
                      <td className="w-32 cursor-default">
                        <p className="mx-4">
                          {moment(task.conclusion_date).format("D/MM/YYYY")}
                        </p>
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
            name="Voltar"
            url={route("task.index")}
            className="bg-indigo-500 text-white hover:brightness-110 transition-all delay-100 ease-linear"
          />
        </div>
      </div>
    </>
  );
}
