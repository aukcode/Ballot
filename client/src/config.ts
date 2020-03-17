
const getBackendAddress = () => {
    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:8080"
    } else {
        return "http://54.173.162.247:8080"
    }
}

export const backendAddress = getBackendAddress();