import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/resort/signup', async (req, res) => {
  const { name, email, phone, password, address } = req.body;

  try {
    const createdGuest = await prisma.guest.create({
      data: {
        name,
        email,
        password,
        phone,
        address,
      },
    });

    res.status(201).json(createdGuest);
  } catch (error) {
    console.error('Error creating guest:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/resort/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.guest.findFirst({
      where: {
        email: email,
        password: password,
      },
    });

    if (user) {
      res.status(200).json({ message: 'Authentication successful', user });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const checkAuth = async (req, res, next) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const user = await prisma.guest.findFirst({
      where: {
        id: id,
        email: email,
        password: password,
      },
    });

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

app.get('/resort/guest/:id', checkAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const guest = await prisma.guest.findUnique({
      where: {
        id: id,
      },
    });

    if (guest) {
      res.status(200).json(guest);
    } else {
      res.status(404).json({ error: 'Guest not found' });
    }
  } catch (error) {
    console.error('Error fetching guest:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/resort/portfolio', async (req, res) => {
  const fetch= await prisma.resortList.findMany()
  
  console.log(fetch)
  res.status(200).json(fetch);
});


app.get('/resort/ResortList/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
    const resort = await prisma.resortList.findUnique({
      where: {
        id: id,
      },
    });

    if (resort) {
      res.status(200).json(resort);
    } else {
      res.status(404).json({ error: 'resort not found' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



