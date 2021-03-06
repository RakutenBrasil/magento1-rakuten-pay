<?php
/**
 ************************************************************************
 * Copyright [2018] [RakutenConnector]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ************************************************************************
 */

namespace Rakuten\Connector\Resources\Factory\Shipping;

use Rakuten\Connector\Domains\ShippingCost;

/**
 * Class Cost
 * @package Rakuten\Connector\Resources\Factory\Shipping
 */
class Cost
{

    /**
     * @var \Rakuten\Connector\Domains\Shipping
     */
    private $shipping;

    /**
     * Shipping constructor.
     */
    public function __construct($shipping)
    {
        $this->shipping = $shipping;
    }

    public function instance(ShippingCost $cost)
    {
        return $this->shipping->setCost($cost);
    }

    public function withParameters($cost)
    {
        $shipping = new ShippingCost();
        $this->shipping->setCost(
            $shipping->setCost($cost)
        );
        return $this->shipping;
    }
}
