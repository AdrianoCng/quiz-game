export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
};

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export enum Category {
    GENERAL_KNOWLEDGE = "9",
    BOOKS = "10",
    FILM = "11",
    MUSIC = "12",
    MUSICALS_AND_THEATRES = "13",
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
    POLITICS = "24",
    ART = "25",
    CELEBRITIES = "26",
    ANIMALS = "27",
    VEHICLES = "28",
    COMICS = "29",
    GADGETS = "30",
    ANIME_AND_MANGA = "31",
    CARTOON_AND_ANIMATIONS = "32"
}

export const fetchQuestions = async (difficulty: Difficulty, category: Category): Promise<Question[]> => {
    const {results} = await (await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple&category=${category}`)).json();
    return results;
}