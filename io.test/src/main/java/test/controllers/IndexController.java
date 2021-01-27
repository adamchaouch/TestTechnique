package test.controllers;

import test.Service.NumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.Map;

@RestController
public class IndexController {
    //Autowired pour l'injection du service
    @Autowired
    NumberService numberService;

//@PostMapping ("/number") intercepter la requete  de post
    //
    @PostMapping ("/number")
    private Map<Integer, String> genNumber(@RequestBody Map<String, Integer> obj)
    {
        //passer obj.get("number") vers le service numberService
        return numberService.divisibilitychecker(obj.get("number"));
    }


}
