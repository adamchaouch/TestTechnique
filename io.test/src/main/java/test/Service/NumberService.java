package test.Service;

import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.Map;
@Service
public class NumberService {

//divisibilitychecker méthode qui retourne une liste map de clé et  valeur vers le contolleur indexcontroller
    public Map<Integer, String> divisibilitychecker(int parameters ){

        HashMap<Integer, String> map = new HashMap<>();

            for (int i = 0; i < parameters; i++) {
                int n = i + 1;
                if ((n % 3 == 0) && (n % 5 == 0)) {
                    map.put(n, "FizzBuzz");
                } else if (n % 3 == 0) {
                    map.put(n, "Fizz");
                } else if (n % 5 == 0) {
                    map.put(n, "Buzz");
                } else {
                    map.put(n, Integer.toString(n + 1));
                }
            }
        return map;
}
}
