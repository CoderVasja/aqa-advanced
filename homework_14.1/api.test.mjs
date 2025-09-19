// api.test.js
const { ApiController } = require("./ApiController");

const res1 = new ApiController();


test("Test get all posts", async () => {
    const response = await res1.getPosts();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("Test get Post By Id", async () => {
    const postId = 1;
    const response = await res1.getPostById(postId);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(postId);
  });

  test("Test create New Post", async () => {
    const newPost = { title: "Test Post", body: "Body text", userId: 1 };
    const response = await res1.createNewPost(newPost);
    expect(response.status).toBe(201); 
    expect(response.data).toMatchObject(newPost);
    expect(response.data.id).toBeDefined();
  });

  test("Test update post ", async () => {
    const postId = 1;
    const updatedData = { title: "Updated Title", body: "Updated Body", userId: 1 };
    const response = await res1.updatePost(updatedData, postId);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(updatedData);
    expect(response.data.id).toBe(postId);
  });

  test("Test delete post", async () => {
    const postId = 1;
    const response = await res1.deletePost(postId);
    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
  });
