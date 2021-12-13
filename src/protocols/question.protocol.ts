export interface question {
    question: string;
    student:  string;
    class: string;
    tags: string;
}

export interface db_question extends question{
    answered: boolean;
    submitAt: string;
}

export interface db_answer {
    answeredAt: string;
    answeredBy: string;
    answer: string;
}
