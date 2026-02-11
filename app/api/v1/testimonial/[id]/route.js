import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import Testimonial from "@/lib/model/testimonial";

const jsonResponse = (data, status = 200) => NextResponse.json(data, { status });

export const GET = async (_request, { params }) => {
    try {
        await ConnectDb();
        const testimonial = await Testimonial.findById(params.id);

        if (!testimonial) {
            return jsonResponse({ error: "Testimonial not found" }, 404);
        }

        return jsonResponse(testimonial, 200);
    } catch (error) {
        return jsonResponse({ error: error.message }, 500);
    }
};

export const PATCH = async (request, { params }) => {
    try {
        await ConnectDb();
        const update = await request.json();

        const testimonial = await Testimonial.findByIdAndUpdate(params.id, update, {
            new: true,
            runValidators: true
        });

        if (!testimonial) {
            return jsonResponse({ error: "Testimonial not found" }, 404);
        }

        return jsonResponse(testimonial, 200);
    } catch (error) {
        return jsonResponse({ error: error.message }, 500);
    }
};

export const DELETE = async (_request, { params }) => {
    try {
        await ConnectDb();
        const testimonial = await Testimonial.findByIdAndDelete(params.id);

        if (!testimonial) {
            return jsonResponse({ error: "Testimonial not found" }, 404);
        }

        return jsonResponse({ message: "Testimonial deleted" }, 200);
    } catch (error) {
        return jsonResponse({ error: error.message }, 500);
    }
};
        