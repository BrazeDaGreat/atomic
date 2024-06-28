import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const accessToken = params.get("code") ?? null;

  if (!accessToken) {
    return Response.json({
      status: false,
      error: "Unable to Authorize.",
    });
  }

  try {
    const API_ENDPOINT = "https://discord.com/api/v10";
    const Client_ID = process.env.DISCORD_CLIENT_ID!;
    const Client_Secret = process.env.DISCORD_CLIENT_SECRET!;
    const REDIRECT_URI = "http://localhost:3000/api/auth";
    // Trying to get the token from accessToken

    const data = new URLSearchParams();
    data.append("grant_type", "authorization_code");
    data.append("code", accessToken);
    data.append("redirect_uri", REDIRECT_URI);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          Client_ID + ":" + Client_Secret
        ).toString("base64")}`,
      },
      body: data,
    };

    const response = await fetch(
      `${API_ENDPOINT}/oauth2/token`,
      requestOptions
    );
    const jsonRes = await response.json();
    const { token_type, access_token } = jsonRes;

    // Get the user's details
    const req = await fetch("https://discord.com/api/users/@me", {
      headers: {
        AUthorization: `${token_type} ${access_token}`,
      },
    });
    const userData = await req.json();

    return Response.json({
      status: "true",
      userData: userData,
      jsonRes: jsonRes,
    });
  } catch (err) {
    return Response.json({
      status: false,
      error: "An error occured while Authorizing.",
    });
  }

  return Response.json(
    { Msg: "your server", accessToken: accessToken },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const accessToken = params.get("code") ?? null;
  return Response.json(
    { Msg: "backend server", accessToken: accessToken },
    { status: 200 }
  );
}
