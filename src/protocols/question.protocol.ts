export interface question {
    question: string;
    student: string;
    class: string;
    tags: string;
}

export interface db_question extends question{
    answered: boolean;
    submitAt: string;
}

export interface answer {
    answeredBy: string;
    answer: string;
    question_id: string;
    user_id: number;
}

export interface db_answer extends answer {
    answeredAt: string;
}
