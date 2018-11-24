import { Departamento } from "./departamento";

export interface Funcionario {
    id: String;
    end_date: Date;
    first_name: String;
    last_name: String;
    start_date: Date;
    title: String;
    assigned_branch_id: String;
    dept_id: Departamento;
    superior_emp_id: String;
}