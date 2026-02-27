import { Clock, GraduationCap, Phone, SmilePlus } from "lucide-react";

export function Benefits() {
    const benefits = [
        {
            icon: Clock,
            title: "Save Time",
            description: "Never worry again about long office waits by conveniently booking ahead online using your computer or mobile phone.",
            color: "text-brand-purple"
        },
        {
            icon: GraduationCap,
            title: "Educating Lifelong Habits",
            description: "We are dedicated to teaching children proper brushing and flossing techniques, instilling good oral hygiene habits early on.",
            color: "text-brand-orange"
        },
        {
            icon: Phone,
            title: "Emergency Service",
            description: "We have staff on call prepared to assist you with emergency dental services in the event of an unfortunate circumstance.",
            color: "text-brand-green"
        },
        {
            icon: SmilePlus,
            title: "Friendly Service",
            description: "We're the dental experts, and that's why it's our responsibility to provide you with excellent service and answers to all of your concerns.",
            color: "text-brand-orange"
        }
    ];

    return (
        <section className="bg-white py-20 px-[5%]">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="heading-style-h2 text-center text-brand-purple mb-4 font-heading">
                    <strong>The Benefits of Choosing Kids Dental Care</strong>
                </h2>
                <p className="text-center text-lg text-gray-600 mb-16 max-w-[700px] mx-auto">
                    Dedicated pediatric care that's there when you need it most.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={index} className="text-center p-6 rounded-2xl hover:shadow-xl transition-shadow border-2 border-gray-100">
                                <div className="flex justify-center mb-4">
                                    <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center ${benefit.color}`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
