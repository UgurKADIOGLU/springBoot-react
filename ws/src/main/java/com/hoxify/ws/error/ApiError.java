package com.hoxify.ws.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;

import java.util.Map;

@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class ApiError {
    private int status;
    private String message;
    private String path;
    private long timeStamp=new Date().getTime();
    private Map<String,String> validationError=null;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }

    public Map<String, String> getValidationError() {
        return validationError;
    }

    public void setValidationError(Map<String, String> validationError) {
        this.validationError = validationError;
    }
}
