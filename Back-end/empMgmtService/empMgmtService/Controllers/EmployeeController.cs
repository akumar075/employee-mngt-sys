using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace empMgmtService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EmployeeController : ControllerBase
    {
        private List<Employee> empList = new List<Employee>();
        public EmployeeController()
        {
            var rng = new Random();
            string[] firstNameArray = new[]
        {
            "john", "sam", "lucy", "linda", "ram", "mohit", "sandy", "duke", "harry", "hima", "hulk", "deepak", "amit","akash","bob","dory","nemo",
        };
            string[] middleNameArray = new[]
       {
            "dev","raj", "mohan","das"
        };
            string[] lastNameArray = new[]
       {
            "patel", "patil", "dev", "junior", "sr", "choudhary", "sharma", "kohli", "sign", "bindu",
        };
            string[] empType = new[]
   {
            "permanent", "contract"
        };
            empList = Enumerable.Range(1, 20).Select(index => new Employee
            {
                first_Name = firstNameArray[rng.Next(firstNameArray.Length)],
                middle_Name = middleNameArray[rng.Next(middleNameArray.Length)],
                last_Name = lastNameArray[rng.Next(lastNameArray.Length)],
                salary = rng.Next(50000, 100000),
                emp_Type = empType[rng.Next(empType.Length)],
            })
                .ToList();
        }

        // GET: api/<EmployeeController>
        [EnableCors("Policy1")]
        [HttpGet]
        public IEnumerable<Employee> Get()
        {

            return empList;
        }

        // GET api/<EmployeeController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}
        [EnableCors("Policy1")]
        [HttpGet("{searchKey}")]
        public IEnumerable<Employee> Get(string searchKey)
        {
            return empList.Where(e => e.first_Name.Contains(searchKey)|| e.last_Name.Contains(searchKey)).ToList();
        }


        // POST api/<EmployeeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
