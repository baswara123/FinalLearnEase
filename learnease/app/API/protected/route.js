import { withAuth } from "../middleware/auth";

export async function GET(req, res) {
  return withAuth(async (req, res) => {

    return new Response(JSON.stringify({ message: 'This is a protected route', user: req.user }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  })(req, res);
}
