export interface ITask {
    id?:          number;
    tittle:      string;
    description: string;
    createDate?:  Date;
    eta:         Date;
    finished?:    boolean;
    taskStatus?:  string;
}
