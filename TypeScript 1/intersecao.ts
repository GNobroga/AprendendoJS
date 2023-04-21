`

    Intersection

`;

type User = {
    name: string,
    id: number
}

type Admin = {
    isAdmin: true,
    level: 0 | 1 | 2
}

type UserAdmin = User & Admin // Concatenando os tipos com a intersection

