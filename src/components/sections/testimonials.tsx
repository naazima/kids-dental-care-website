import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Testimonials() {
    const reviews = [
        {
            name: "Alexa Perry",
            timeAgo: "a months ago",
            text: "Amazing people!!!!! Very caring staff great with kids made my daughter feel very comfortable the entire time they're a little strict on if a different family member brings your child in. They wouldn't see my daughter if they didn't get a hold of me at work which I mean her grandmother was bringing her in and she had an appointment that day so I don't see the issue but other than that they're great great staff great dentist all-around great",
            rating: 5
        },
        {
            name: "Sara Lamont",
            timeAgo: "a months ago",
            text: "1st time patient with my 3 kids and the visit couldn't have gone smoother! Very friendly staff, kid focused environment and state of the art equipment.",
            rating: 5
        },
        {
            name: "Krystal Rodriguez",
            timeAgo: "a months ago",
            text: "The dentist was amazing with my Autistic son.  She talked him through every step of his dental cleaning.  She even gave him little breaks in between.  She was super sweet I highly recommend her she is great.",
            rating: 5
        },
        {
            name: "Jessica Lafountain",
            timeAgo: "2 months ago",
            text: "The doctor was gentle and caring has a procedures were being met. The reception is very sweet and understanding and we scheduled my appointment with these. I am actually looking to maybe changing my doctor to this office.",
            rating: 5
        }
    ];

    return (
        <section className="bg-gradient-to-br from-brand-orange/10 to-brand-purple/10 py-20 px-[5%]">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="heading-style-h2 text-center text-brand-purple mb-4 font-heading">
                    <strong>Patients Highlighted Reviews</strong>
                </h2>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Because reviews are important to us
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#FFD85C] text-[#FFD85C]" />
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4 italic">
                                "{review.text}"
                            </p>
                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <p className="font-bold text-gray-800">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.timeAgo}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="default" size="lg" className="bg-brand-purple hover:bg-brand-purple-hover" asChild>
                        <Link href="https://www.google.com/search?q=kids+dental+care+bristol" target="_blank" rel="noopener noreferrer">
                            More Google Reviews
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
