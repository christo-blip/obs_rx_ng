export interface Task{
    id:string;
    descritpiton:string;
    completed: boolean;
}

export interface Course{
    courseId: number;
    title: string;
     description: string;
     questionsAvailable: boolean;
     questionCount: number;
} 

export interface Note{
    id:Number|null,
    title:string,
    details:string,
}
