export const posts = [
    {
        id: 1,
        title: 'Titolo del Post',
        image: '' /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html', 'css'],
        published: true,
    },
    {
        id: 2,
        title: 'Titolo del Post',
        image: '' /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'css'],
        published: true,
    },
    {
        id: 3,
        title: 'Titolo del Post',
        image: '' /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'php'],
        published: true,
    },
    {
        id: 4,
        title: 'Titolo del Post',
        image: '' /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html'],
        published: false,
    },
]


/*

Esercizio

Partendo dall’esercizio di ieri e dall’array di posts allegato, l’obiettivo è creare dinamicamente gli articoli all’interno della pagina.

I dati relativi a ciascun post dovranno essere passati come props al componente card.

Ogni post ha una proprietà published, e gli articoli devono essere mostrati solo se questa proprietà è impostata su true. (come possiamo gestire questo aspetto?)

I tags devono essere stampati nella card sotto al titolo del post e devono stare uno affinaco all’altro con un leggero spazio tra di loro, ed eventualmente andare a capo se non ci stanno su una sola riga.

Inoltre dovete assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css, etc…

Se un post non ha un’immagine, inserite un’immagine di default, potete gestire questa immagina come faile locale oppure potete utilizzare uno dei tanti servizi online come:
https://placehold.co/
https://picsum.photos/

Aggiungi una sezione nella pagina in cui mostrare la lista dei tag distinti senza ripetizioni.

PS.

Il componente card deve stampare UNA SINGOLA CARD DI UN POST… quindi deve ricevere come props solo i dati di un singolo post e non tutto l’array di posts

l’array di tags dovete generarlo con javascript partendo dall’array di posts (NON DOVETE FARLO VOI A MANO!!!!)

 */