const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Ольга",
            "id_3": "Ирина",
            "id_4": "Наталья",
            "id_5": "Елена",
            "id_6": "Виктория",
            "id_7": "Елизавета",
            "id_8": "Анастасия",
            "id_9": "Надежда",
            "id_10": "Анна"
        }
    }`,
    fatherNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Олегович",
            "id_5": "Дмитриевич",
            "id_6": "Борисович",
            "id_7": "Михайлович",
            "id_8": "Петрович",
            "id_9": "Сергеевич",
            "id_10": "Андреевич"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        return this.randomIntNumber () === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomFirstName: function() {
        if (this.randomGender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson); 
             }
        else {
            return this.randomValue(this.firstNameFemaleJson);
             }
    },


     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomFatherName: function() {

        return this.randomValue(this.fatherNameMaleJson);

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.fatherName = this.randomFatherName();
        return this.person;
    }
};