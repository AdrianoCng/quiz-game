export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
    answers: string[];
};

export type QuizState = {
    questions: Question[];
    response_code: number;
};

export enum Category {
    GENERAL_KNOWLEDGE = "9",
    BOOKS = "10",
    FILM = "11",
    MUSIC = "12",
    TELEVISION = "14",
    VIDEO_GAMES = "15",
    BOARD_GAMES = "16",
    SCIENCE_AND_NATURE = "17",
    COMPUTERS = "18",
    MATHEMATICS = "19",
    MYTHOLOGY = "20",
    SPORTS = "21",
    GEOGRAPHY = "22",
    HISTORY = "23",
    CELEBRITIES = "26",
    ANIMALS = "27",
    VEHICLES = "28",
    COMICS = "29",
    ANIME_AND_MANGA = "31",
    CARTOON_AND_ANIMATIONS = "32",
}

export const fetchQuestions = async (
    difficulty: Difficulty,
    category: Category
): Promise<QuizState> => {
    const { results, response_code } = await (
        await fetch(
            `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple&category=${category}`
        )
    ).json();

    const questions: Question[] = results.map((question: Question) => ({
        ...question,
        answers: shuffleAnswers([
            ...question.incorrect_answers,
            question.correct_answer,
        ]),
    }));

    return {
        response_code,
        questions,
    };
};

export const shuffleAnswers = (array: string[]) => {
    let counter = array.length;

    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);

        counter--;

        const temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};

export const formatTime = (timer: number) => {
    const getSeconds = `0${timer % 60}`.slice(-2);

    const minutes = Math.floor(timer / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
};
