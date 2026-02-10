import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import Testimonial from "@/lib/model/testimonial";

const jsonResponse = (data, status = 200) => NextResponse.json(data, { status });

export const POST = async (request) => {
    try {
        await ConnectDb();
        const body = await request.json();
        const {
            name,
            image,
            description,
            designation,
            testimonialType,
            review,
            rating,
            googlelink,
            publish
        } = body || {};

        if (!name || !testimonialType || !googlelink) {
            return jsonResponse(
                { error: "name, testimonialType, and googlelink are required" },
                400
            );
        }

        const testimonial = new Testimonial({
            name,
            image,
            description,
            designation,
            testimonialType,
            review,
            rating,
            googlelink,
            publish
        });

        await testimonial.save();
        return jsonResponse(
            {
                status: "success",
                message: "Testimonial created successfully",
                data: testimonial
            }
        );
    } catch (error) {
        console.error("Error creating testimonial:", error);
        return jsonResponse({ error: error.message }, 500);
    }
};

export const GET = async (request) => {
    try {
        await ConnectDb();
        const { searchParams } = new URL(request.url);
        const testimonialType = searchParams.get("testimonialType");
        const publish = searchParams.get("publish");

        const filter = {};
        if (testimonialType) {
            filter.testimonialType = testimonialType;
        }
        if (publish !== null) {
            filter.publish = publish === "true";
        }

        const testimonials = await Testimonial.find(filter);
        return jsonResponse(
            {
                status: "success",
                message: "Testimonials retrieved successfully",
                data: testimonials
            },
            200
        );
    } catch (error) {
        return jsonResponse({ error: error.message }, 500);
    }
};