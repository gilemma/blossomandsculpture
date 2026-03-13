import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: req.body.items,
    mode: "payment",
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/shop`
  });

  res.json({ url: session.url });
}