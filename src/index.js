import express from 'express';
import cors from 'cors';

let PORT = process.env.PORT || 5000;
let app = express();
let version = "v1"


let users = [
    {
        id: "123x",
        email: "anestin@gmail.com",
        password: "123Abc#",
        name: "Anestin James"
    }
]

let projects = [
    {
        id: 1,
        name: "Rework",
        domain: "https://reworkacademy.co",
        created_at: "2025-03-22T03:03:22z",
        overall_visit: 5,
        total_sec_spent: 700,
        total_time: 5000,
        total_average_time: "15 sec",
        weekly_visit: 30,
        monthly_visit: 50,
        daily_visit: 10,
        inbound_rate_pct: .5,
        outbound_rate_pct: .3,
        routes: [
            {
                id: 1,
                route: "/index",
                value: 1
            },
            {
                id: 2,
                route: "/about",
                value: 1
            },
            {
                id: 3,
                route: "/login",
                value: 1
            },
            {
                id: 4,
                route: "/apply",
                value: 3
            }
        ],
        devices: [
            {
                id: 1,
                name: "Mozilla",
                value: 50
            },
            {
                id: 2,
                name: "Chrome",
                value: 20
            }
        ],
        countries: [
            {
                id: 0,
                name: "Nigeria",
                value: 1200
            },
            {
                id: 1,
                name: "USA",
                value: 900
            },
            {
                id: 2,
                name: "Canada",
                value:831
            },
            {
                id: 3,
                name: "India",
                value: 654
            },
            {
                id: 4,
                name: "Mexico",
                value:375
            },
            {
                id: 5,
                name: "Iran",
                value: 234
            }
        ],
        users: [
            {
                id: 1,
                hash: "x43dc",
                type: "anonymous",
                device: "Nokia",
                broswer: {
                    name: "chrome",
                    version: "135.67.4"
                },
                country: "Ng",
                state: "Lagos",
                visit: 5,
                date: "2025-03-05"
            }
        ]
    },
    {
        id: 2,
        name: "Learn",
        domain: "https://d.reworkacademy.co",
        created_at: "2025-05-22T03:03:22z",
        overall_visit: 15,
        total_sec_spent: 700,
        total_time: 5000,
        total_average_time: "15 sec",
        weekly_visit: 30,
        monthly_visit: 50,
        daily_visit: 10,
        inbound_rate_pct: .5,
        outbound_rate_pct: .3,
        routes: [
            {
                id: 1,
                route: "/index",
                value: 1
            },
            {
                id: 2,
                route: "/about",
                value: 1
            },
            {
                id: 3,
                route: "/login",
                value: 1
            },
            {
                id: 4,
                route: "/apply",
                value: 3
            }
        ],
        devices: [
            {
                id: 1,
                name: "Mozilla",
                value: 50
            },
            {
                id: 2,
                name: "Chrome",
                value: 20
            }
        ],
        countries: [
            {
                id: 0,
                name: "Nigeria",
                value: 1200
            },
            {
                id: 1,
                name: "USA",
                value: 900
            },
            {
                id: 2,
                name: "Canada",
                value:831
            },
            {
                id: 3,
                name: "India",
                value: 654
            },
            {
                id: 4,
                name: "Mexico",
                value:375
            },
            {
                id: 5,
                name: "Iran",
                value: 234
            }
        ],
        users: [
            {
                id: 1,
                hash: "x43dc",
                type: "anonymous",
                device: "Nokia",
                broswer: {
                    name: "chrome",
                    version: "135.67.4"
                },
                country: "Ng",
                state: "Lagos",
                visit: 5,
                date: "2025-03-05"
            }
        ]
    },
    {
        id: 3,
        name: "Blend",
        domain: "https://blend.reworkacademy.co",
        created_at: "2025-07-22T03:03:22z",
        overall_visit: 25,
        total_sec_spent: 700,
        total_time: 5000,
        total_average_time: "15 sec",
        weekly_visit: 30,
        monthly_visit: 50,
        daily_visit: 10,
        inbound_rate_pct: .5,
        outbound_rate_pct: .3,
        routes: [
            {
                id: 1,
                route: "/index",
                value: 1
            },
            {
                id: 2,
                route: "/about",
                value: 1
            },
            {
                id: 3,
                route: "/login",
                value: 1
            },
            {
                id: 4,
                route: "/apply",
                value: 3
            }
        ],
        devices: [
            {
                id: 1,
                name: "Mozilla",
                value: 50
            },
            {
                id: 2,
                name: "Chrome",
                value: 20
            }
        ],
        countries: [
            {
                id: 0,
                name: "Nigeria",
                value: 1200
            },
            {
                id: 1,
                name: "USA",
                value: 900
            },
            {
                id: 2,
                name: "Canada",
                value:831
            },
            {
                id: 3,
                name: "India",
                value: 654
            },
            {
                id: 4,
                name: "Mexico",
                value:375
            },
            {
                id: 5,
                name: "Iran",
                value: 234
            }
        ],
        users: [
            {
                id: 1,
                hash: "x43dc",
                type: "anonymous",
                device: "Nokia",
                broswer: {
                    name: "chrome",
                    version: "135.67.4"
                },
                country: "Ng",
                state: "Lagos",
                visit: 5,
                date: "2025-03-05",

            }
        ]
    }
]


const users_actions = [
    {
        id: 1,
        start_date: "2025-03-05T05:04:04.343Z",
        start_date: "2025-03-05T05:04:24.121Z",
        trails: [
            {
                id: 1,
                page: "/index",
                start_time: "04:04",
                end_time: "04:13",
                duration: "2 sec",
                snapshots: {
                    clicks: [

                    ],
                    mouse: [

                    ]
                }
            }
        ]
    }
]


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get(`/${version}/`, (req, res) => res.json({
    msg: "Server running"
}))


app.post(`/${version}/auth/login`, async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = users.find(x => x.email == email && x.password == password)

        if (!user) return res.status(404).json({ msg: "Invalid user or password", status: "not_found", code: 404 })

        res.json({
            msg: "Successfull",
            code: 200,
            data: {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                },
                token: Date.now().toString("36")
            }
        });

    } catch (err) {

        res.status(500).json({
            msg: "Internal server errored",
            status: "internal_server",
            code: 500
        });

    }
})



//projects
app.get(`/${version}/projects`, async (req, res) => {
    try {

        let projs = projects.map(e => ({
            id: e.id,
            name: e.name,
            domain: e.domain,
            overall_visit: e.overall_visit,
            domain: e.domain,
            total_average_time: e.total_average_time,
            inbound_rate_pct: e.inbound_rate_pct,
            outbound_rate_pct: e.outbound_rate_pct,
            created_at: e.created_at
        }))

        res.json({
            msg: "Successfull",
            code: 200,
            data: {
                info: projs,
                paginate: {
                    docs: 3,
                    pages: 1,
                    page: 1,
                    limit: 15
                }
            }
        });

    } catch (err) {

        res.status(500).json({
            msg: "Internal server errored",
            status: "internal_server",
            code: 500
        });
    }
})

app.get(`/${version}/projects/:id`, async (req, res) => {
    try {
        let project = projects.find(x => x.id === parseInt(req.params.id));
        if (!project) return res.status(404).json({ msg: "Invalid project id was passed", code: 404, status: "invalid_id" })

        let result = {
            overall_visit: project.overall_visit,
            domain: project.domain,
            total_average_time: project.total_average_time,
            inbound_rate_pct: project.inbound_rate_pct,
            outbound_rate_pct: project.outbound_rate_pct,
            weekly_visit: project.weekly_visit,
            monthly_visit: project.monthly_visit,
            daily_visit: project.daily_visit,
            users: project.users,
            countries: project.countries,
            routes: project.routes
        }

        res.json({
            msg: "Successfull",
            code: 200,
            data: {
                info: result,
                paginate: {
                    docs: 3,
                    pages: 1,
                    page: 1,
                    limit: 15
                }
            }
        });

    } catch (err) {
        res.status(500).json({
            msg: "Internal server errored",
            status: "internal_server",
            code: 500
        });
    }
})

app.get(`/${version}/projects/:id/users/:id2`, async (req, res) => {
    try {
        let project = projects.find(x => x.id === parseInt(req.params.id));
        if (!project) return res.status(404).json({ msg: "Invalid project id was passed", code: 404, status: "invalid_id" })

        let result = {
            overall_visit: project.overall_visit,
            domain: project.domain,
            total_average_time: project.total_average_time,
            inbound_rate_pct: project.inbound_rate_pct,
            outbound_rate_pct: project.outbound_rate_pct,
            weekly_visit: project.weekly_visit,
            monthly_visit: project.monthly_visit,
            daily_visit: project.daily_visit,
            users: project.users,
            countries: project.countries,
            routes: project.routes
        }

        res.json({
            msg: "Successfull",
            code: 200,
            data: {
                info: result,
                paginate: {
                    docs: 3,
                    pages: 1,
                    page: 1,
                    limit: 15
                }
            }
        });

    } catch (err) {
        res.status(500).json({
            msg: "Internal server errored",
            status: "internal_server",
            code: 500
        });
    }
})

app.listen(PORT, () => {
    console.log(`Hermes server running on ${PORT}`)
});
