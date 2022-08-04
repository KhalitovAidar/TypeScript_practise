console.clear();

/**
 * 1) Написать класс который принимает в конструктор объект пользователя
 * 2) Описать интерфейс объекта пользователя, у пользователя содерижится дата рождения.
 * 3) Написать метод класса который вычисляет и возвращает кол-во лет пользователя.
 * 4) Создать репозиторий гитхаб
 * 5) Сделать коммит в этот репозиторий
 */

interface User {
    name: string;
    date: Date
}

const user = {
    name: 'Andrey',
    date: new Date("2018-03-16")
}

class Lol {
    readonly user: User
    constructor(user: User) {
        this.user = user
    };

    getUserAge (): number {
        const nowYear = new Date().getFullYear();
        return nowYear - this.user.date.getFullYear();
    };
}

const andrey = new Lol(user);
console.log(andrey.getUserAge)
