package com.br.fatec.lojaFatec.DTOs;

public class ErrorDTO {

	private String errorText;
	private boolean hasError;
	private String color;
	
	
	public ErrorDTO(String errorText, boolean hasError) {
		this.errorText = errorText;
		this.hasError = hasError;
		if(hasError) {
			this.color = "danger";
		}else this.color = "success";
		
	}


	public String getErrorText() {
		return errorText;
	}


	public boolean getHasError() {
		return hasError;
	}


	public String getColor() {
		return color;
	}
	
	
	
}
