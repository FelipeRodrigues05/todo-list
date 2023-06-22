<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('task.index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::resource('task', TaskController::class)->middleware('auth');

Route::get('/task/concluded/{task}', [TaskController::class, 'displayConcludedTask']);
Route::put('/task/concluded/{task}', [TaskController::class, 'setTaskAsConcluded'])->name('task.setconcluded')->middleware('auth');
Route::get('/tasks', [TaskController::class, 'getConcludedTasks'])->name('task.concluded')->middleware('auth');

require __DIR__ . '/auth.php';