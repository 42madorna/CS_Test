using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using C_.Models;

namespace C_.Controllers;

public class CalculatorController : Controller
{
	[HttpPost]
	public string Index(string firstNumber, string secondNumber) {
		return $"{int.Parse(firstNumber) + int.Parse(secondNumber)}";
	}
}
