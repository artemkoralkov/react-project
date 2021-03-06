let filmsList = [];
if (localStorage.getItem('filmsState') === null || localStorage.getItem('filmsState').length < 3) {
  filmsList = [
    {
      key: 1,
      title: 'Побег из Шоушенка',
      director: 'Фрэнк Дарабонт',
      genre: 'драма',
      description:
        'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
      poster: 'https://st.kp.yandex.net/images/film_big/326.jpg',
    },
    {
      key: 2,
      title: 'Зеленая миля',
      director: 'Фрэнк Дарабонт',
      genre: 'фантастика, драма, криминал, детектив',
      description:
        'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
      poster: 'https://st.kp.yandex.net/images/film_big/435.jpg',
    },
    {
      key: 3,
      title: 'Список Шиндлера',
      director: 'Стивен Спилберг',
      genre: 'драма, биография, история, военный',
      description:
        'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
      poster: 'https://st.kp.yandex.net/images/film_big/329.jpg',
    },
    {
      key: 4,
      title: '1+1',
      director: 'Оливье Накаш, Эрик Толедано',
      genre: 'драма, комедия, биография',
      description:
        'Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, — молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.',
      poster: 'https://st.kp.yandex.net/images/film_big/535341.jpg',
    },
    {
      key: 5,
      title: 'Начало',
      director: 'Кристофер Нолан',
      genre: 'фантастика, боевик, триллер, драма, детектив',
      description:
        'Кобб — талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил.И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное — инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача — не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением.Но никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.',
      poster: 'https://st.kp.yandex.net/images/film_big/447301.jpg',
    },
    {
      key: 6,
      title: 'Леон',
      director: '	Люк Бессон',
      genre: 'боевик, триллер, драма, криминал',
      description:
        'Профессиональный убийца Леон, не знающий пощады и жалости, знакомится со своей очаровательной соседкой Матильдой, семью которой расстреливают полицейские, замешанные в торговле наркотиками. Благодаря этому знакомству он впервые испытывает чувство любви, но…',
      poster: 'https://st.kp.yandex.net/images/film_big/389.jpg',
    },
    {
      key: 7,
      title: 'Король Лев',
      director: 'Роджер Аллерс, Роб Минкофф',
      genre: 'мультфильм, мюзикл, драма, приключения, семейный',
      description:
        'У величественного Короля-Льва Муфасы рождается наследник по имени Симба. Уже в детстве любознательный малыш становится жертвой интриг своего завистливого дяди Шрама, мечтающего о власти. Симба познаёт горе утраты, предательство и изгнание, но в конце концов обретает верных друзей и находит любимую. Закалённый испытаниями, он в нелёгкой борьбе отвоёвывает своё законное место в «Круге жизни», осознав, что значит быть настоящим Королём.',
      poster: 'https://st.kp.yandex.net/images/film_big/2360.jpg',
    },
    {
      key: 8,
      title: 'Бойцовский клуб',
      director: 'Дэвид Финчер',
      genre: 'триллер, драма, криминал',
      description:
        'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить — саморазрушение.Проходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.',
      poster: 'https://st.kp.yandex.net/images/film_big/361.jpg',
    },
    {
      key: 9,
      title: 'Иван Васильевич меняет профессию',
      director: 'Леонид Гайдай',
      genre: 'фантастика, комедия, приключения',
      description:
        'Инженер-изобретатель Тимофеев сконструировал машину времени, которая соединила его квартиру с далеким шестнадцатым веком — точнее, с палатами государя Ивана Грозного. Туда-то и попадают тезка царя пенсионер-общественник Иван Васильевич Бунша и квартирный вор Жорж Милославский. На их место в двадцатом веке «переселяется» великий государь. Поломка машины приводит ко множеству неожиданных и забавных событий…',
      poster: 'https://st.kp.yandex.net/images/film_big/42664.jpg',
    },
  ];
} else {
  filmsList = JSON.parse(localStorage.getItem('filmsState'));
}

const initialState = {
  films: filmsList,
  draggingFilm: {},
  clickingFilm: {},
};
export default function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FILM': {
      const key = state.films[state.films.length - 1].key + 1;
      const newFilms = state.films;
      newFilms.push({
        key,
        title: action.payload[0],
        director: action.payload[1],
        genre: action.payload[2],
        description: action.payload[3],
        poster: action.payload[4],
      });
      localStorage.setItem('filmsState', JSON.stringify(newFilms));
      return { ...state, films: newFilms };
    }
    case 'REMOVE_FILM': {
      const filmsAfterRemove = state.films.filter(elem => elem.key !== action.payload);
      localStorage.setItem('filmsState', JSON.stringify(filmsAfterRemove));
      return { ...state, films: filmsAfterRemove };
    }
    case 'DRAGGING_FILM': {
      return { ...state, draggingFilm: action.payload };
    }
    case 'CLICK_ON_FILM': {
      return { ...state, clickingFilm: action.payload };
    }
    default:
      return state;
  }
}
