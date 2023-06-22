<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tasks/ListAllTask', [
            'tasks' => Task::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Tasks/CreateTask');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $data = $request->data;

        Task::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'estimated_date' => $data['date']
        ]);

        return to_route('task.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $task = Task::findOrFail($id);
        return Inertia::render('Tasks/DisplaySpecifiedTask', [
            'task' => $task
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, string $id)
    {
        $task = Task::findOrFail($id);

        $task->update([
            'name' => $request->name,
            'description' => $request->description,
            'estimated_date' => $request->estimatedDate,
        ]);

        return to_route('task.index');
    }

    public function edit(string $id)
    {
        return Inertia::render('Tasks/EditTask', [
            'task' => Task::findOrFail($id)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Task::findOrFail($id)->delete();


        if (str_contains(\URL::previous(), '/tasks')) {
            return to_route('task.concluded');
        }
        return to_route('task.index');
    }

    public function setTaskAsConcluded(string $id, Request $request)
    {
        $task = Task::findOrFail($id);

        $task->update(['concluded' => $request->conclusion]);
    }

    public function getConcludedTasks()
    {
        return Inertia::render('Tasks/ListAllConcludedTasks', [
            'tasks' => Task::all()
        ]);
    }

    public function displayConcludedTask(string $id)
    {
        $task = Task::findOrFail($id);
        return Inertia::render('Tasks/DisplaySpecifiedConcludedTask', [
            'task' => $task
        ]);

    }
}