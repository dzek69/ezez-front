// eslint-disable-next-line max-statements
const postNavigate = (url: string, formData: FormData, encType = "multipart/form-data") => {
    const form = document.createElement("form");
    form.style.display = "none";
    form.method = "post";
    form.action = url;
    form.enctype = encType;
    const entries = formData.entries();
    for (const [key, value] of entries) {
        if (typeof value !== "string") {
            throw new Error("FormData must contain only string values");
        }

        const input = document.createElement("input");
        input.name = key;
        input.value = value;
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
};
