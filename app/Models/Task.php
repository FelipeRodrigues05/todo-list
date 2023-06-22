<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Notifications\Notifiable;

class Task extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'description',
        'estimated_date',
        'concluded'
    ];

    protected $casts = [
        'estimated_date' => 'datetime:Y-m-d',
        'conclusion_date' => 'datetime:Y-m-d',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }
}