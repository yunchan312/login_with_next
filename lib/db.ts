import { PrismaClient } from ".prisma/client";
import { connect } from "http2";

const db = new PrismaClient();

async function testTweet() {
  const tweet = await db.tweet.create({
    data: {
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log("-----tweet-----\n", tweet);
}
async function testUser() {
  const user = await db.user.create({
    data: {
      username: "admin",
      email: "admin@admin.312",
      password: "13456",
      bio: "Asdfasdf",
    },
  });
  console.log(user);
}
async function testLike() {
  const like = await db.like.create({
    data: {
      user: {
        connect: {
          id: 1,
        },
      },
      tweet: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(like);
}
testLike();
//testTweet();
//testUser();

export default db;
