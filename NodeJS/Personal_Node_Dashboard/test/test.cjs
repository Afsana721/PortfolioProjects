const mocha = require('mocha');
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const path = require('path');
const { notePost } = require('../models/userModel'); // Import model object

const agent = supertest.agent(app);

const user = {
  username: 'Afroze',
  email: 'afsana721@yahoo.com',
  password: '887799',
};

const noteData = {
  title: 'Posting note data to note post?',
  description: 'Testing, Testing, Testing',
  image: 'assets/dontForget.jpeg',
};

const editData = {
  title: 'Hi everyone, Edited!',
  description: 'Edit test using mocha + supertest',
  image: '../public/assets/notes_img.jpeg',
};

let noteId; //global to store note _id

describe('Test suite', function () {
  it('Register user', async () => {
    const res = await supertest(app).post('/register').send(user);
    expect(res.status).to.equal(302);
  });

  it('Login user', async () => {
    const res = await agent.post('/login').send(user);
    expect(res.status).to.equal(302);
  });

  it('User posts a note', async () => {
    const res = await agent
      .post('/dashboard')
      .field('title', noteData.title)
      .field('description', noteData.description)
      .attach('noteImage', path.join(__dirname, '../public/assets/dontForget.jpeg'));

    expect(res.status).to.equal(302);

    //Get the note from DB to use in edit test
    const note = await notePost.findOne({ title: noteData.title }).sort({ _id: -1 });
    console.log('Note after post:', note);

    noteId = note._id.toString(); // store for next test
  });

  it('User edits the posted note', async () => {
    const res = await agent
      .post('/dashboard/edit')
      .field('id', noteId) //send ID
      .field('title', editData.title)
      .field('description', editData.description)
      .attach('noteImage', path.join(__dirname, '../public/assets/notes_img.jpeg'));

    expect(res.status).to.equal(302);
// Fetch edited note by ID to confirm update
    const updatedNote = await notePost.findById(noteId);
    console.log('Note after edit:', updatedNote);
  });

  it('User delete user note post data', async () => {
    const res = await agent.post(`/dashboard/delete?id=${noteId}`);
      expect(res.status).to.equal(302);
  });
});
