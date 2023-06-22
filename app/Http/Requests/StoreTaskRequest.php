<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            // 'name' => ['required'],
            // 'description' => ['required', 'min:30'],
            // 'estimated_date' => ['required']
        ];
    }

    // public function attributes(): array
    // {
    //     return [
    //         'name' => 'O Nome',
    //         'description' => "A Descrição",
    //         'estimated_date' => "A Data Estimada de Conclusão"
    //     ];
    // }

    // public function messages(): array
    // {
    //     return [
    //         'name.required' => ":attribute é obrigatório",
    //         'description' => [
    //             'required' => ":attribute é obrigatório",
    //             'min:30' => ':attribute precisa ter no minimo 30 caracteres'
    //         ],
    //         'estimated_date' => [
    //             'required' => ':attribute é obrigatório',
    //         ]
    //     ];
    // }
}