const Form = ({ title, fields, buttonText, onSubmit, footerContent, backgroundColor }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        onSubmit(data);
    };

    return (
        <form className="form" style={{ backgroundColor: backgroundColor }} onSubmit={handleSubmit} autoComplete="off">
            <h1>{title}</h1>
            {fields.map((field, index) => (
                <div className="container_inputs" key={index}>
                    {field.label && <label htmlFor={field.name}>{field.label}</label>}
                    {field.type === 'select' ? (
                        <select
                            name={field.name}
                            required={field.required}
                            disabled={field.disabled}
                        >
                            {field.options.map((option, idx) => (
                                <option key={idx} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : field.type === 'text-area' ? (
                        <textarea
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            disabled={field.disabled}
                        />
                    ) : (
                        <input
                            name={field.name}
                            placeholder={field.placeholder}
                            type={field.type || "text"}
                            value={field.value}
                            required={field.required}
                            disabled={field.disabled}
                        />
                    )}
                </div>
            ))}
            {buttonText && <button type="submit">{buttonText}</button>}
            {footerContent && <div>{footerContent}</div>}
        </form>
    );
};

export default Form;
