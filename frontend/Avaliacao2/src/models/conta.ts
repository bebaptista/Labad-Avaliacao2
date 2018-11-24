import { Funcionario } from "./funcionario";

export interface Conta {
    id: String;
    avail_balance: Number;
    close_date: Date;
    last_activity_date: Date;
    open_date: Date;
    pending_balance: Number;
    status: String;
    customer_id: String;
    open_emp_id: Funcionario;
}